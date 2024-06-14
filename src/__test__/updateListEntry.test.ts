import CollectionRecords from '../services/collectionRecords/collectionRecords';
import axiosWrapper from '../utilities/axiosRequestWrapper';
import createAxiosConfig from '../utilities/axiosConfig';
import { validateParameters } from '../utilities/validateParameters';
import ListEntries from '../services/listEntries/listEntries';

jest.mock('../utilities/axiosRequestWrapper.ts');
jest.mock('../utilities/axiosConfig');
jest.mock('../utilities/validateParameters');

const mockedAxiosWrapper = axiosWrapper as jest.MockedFunction<typeof axiosWrapper>;
const mockedCreateAxiosConfig = createAxiosConfig as jest.MockedFunction<typeof createAxiosConfig>;
const mockedValidateParameters = validateParameters as jest.MockedFunction<typeof validateParameters>;

describe('ListEntries - updateListEntry', () => {
  let listEntries: ListEntries;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const listId = '66581884c254f3f08404a1d1';
  const entryId = "666a705d0bcfdb9e17296fe7";
  const api_url_update = `${domain}/api/v1/list-entries/${listId}/${entryId}`;

  beforeEach(() => {
    listEntries = new ListEntries(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update fields of a entry in specified list", async () => {
    const updatingEntry = {
        "owner": "653b8e816ecd501e8dcbae4a",
        "apiPhoneNumber": "9999993025",
        "apiEmail": "test1test@node.com",
        "apiStatus1": null,
        "apiDate1": null ,
        "apiOrderStatus" : "665818f1c254f3f08404a368",
        "apiPaymentMethod" : "66581906c254f3f08404a3b6",
        "apiOrderDate" : "2024-06-13T04:06:53.801Z"
    };

    const successResponse = {
        "status": true,
        "message": "List Entry updated successfully"
    }

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await listEntries.updateListEntry(listId, entryId, updatingEntry);

    expect(mockedValidateParameters).toHaveBeenCalledWith(
      { listId, entryId, recordData: updatingEntry },
      ['listId', 'entryId', 'recordData']
    );

    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith(
      {
        apiKey,
        method: 'patch',
        apiUrl: api_url_update,
        data: updatingEntry
      }
    );

    expect(result).toEqual(
      expect.objectContaining({
       "status": true,
        "message": "List Entry updated successfully"
      })
    );
  });
});
