import ListEntries from '../services/listEntries/listEntries';
import axiosWrapper from '../utilities/axiosRequestWrapper';
import createAxiosConfig from '../utilities/axiosConfig';
import { validateParameters } from '../utilities/validateParameters';

jest.mock('../utilities/axiosRequestWrapper.ts');
jest.mock('../utilities/axiosConfig');
jest.mock('../utilities/validateParameters');

const mockedAxiosWrapper = axiosWrapper as jest.MockedFunction<typeof axiosWrapper>;
const mockedCreateAxiosConfig = createAxiosConfig as jest.MockedFunction<typeof createAxiosConfig>;
const mockedValidateParameters = validateParameters as jest.MockedFunction<typeof validateParameters>;

describe('ListEntries - createListEntry', () => {
  let listEntries: ListEntries;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const listId = '66581884c254f3f08404a1d1';
  const api_url_save = `${domain}/api/v1/list-entries/${listId}`;
  
  const newEntry = {
    "data" : {
             "owner": "653b8e816ecd501e8dcbae4a",
            "apiPhoneNumber": "8790493025",
            "apiEmail": "",
            "apiStatus1": null,
            "apiDate1": null ,
            "apiOrderStatus" : "665818f1c254f3f08404a36a",
            "apiPaymentMethod" : "66581906c254f3f08404a3b8"

    },
    "recordId" : "66558dc2ba37a2b3f6bfd394"
  };

  beforeEach(() => {
    listEntries = new ListEntries(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save a new entry to the specified list", async () => {
    const successResponse = {
        "status": true,
        "message": "List entry created successfully!",
        "data": {
            "listId": "66581884c254f3f08404a1d1",
            "peopleId": "66685bb7526d4a7f1dfde7ad",
            "companyId": null,
            "dealId": null,
            "recordId": null,
            "owner": "653b8e816ecd501e8dcbae4a",
            "_id": "666a6a2033fd58b39ef2576f",
            "createdAt": "2024-06-13T03:40:16.482Z",
            "updatedAt": "2024-06-13T03:40:16.482Z",
            "__v": 0
        },
        "_id": "666a6a2033fd58b39ef2576f"
    };

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await listEntries.createListEntry(listId, newEntry);

    expect(mockedValidateParameters).toHaveBeenCalledWith({ listId, recordData: newEntry }, ['listId', 'recordData']);
    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith({
      apiKey,
      method: 'post',
      apiUrl: api_url_save,
      data: newEntry
    });

    expect(result).toEqual(
      expect.objectContaining({
        "status": true,
        "message": "List entry created successfully!",
        "data": {
            "listId": "66581884c254f3f08404a1d1",
            "peopleId": "66685bb7526d4a7f1dfde7ad",
            "companyId": null,
            "dealId": null,
            "recordId": null,
            "owner": "653b8e816ecd501e8dcbae4a",
            "_id": "666a6a2033fd58b39ef2576f",
            "createdAt": "2024-06-13T03:40:16.482Z",
            "updatedAt": "2024-06-13T03:40:16.482Z",
            "__v": 0
        },
        "_id": "666a6a2033fd58b39ef2576f"
      })
    );
  });
});
