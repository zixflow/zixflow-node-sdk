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

describe('ListEntries - getListEntryById', () => {
  let listEntries: ListEntries;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const listId = 'people';
  const entryId = '66691f1e0bcfdb9e1719bdaa';
  const api_url_get = `${domain}/api/v1/list-entries/${listId}/${entryId}`;

  beforeEach(() => {
    listEntries = new ListEntries(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get the entry from specified list", async () => {
    const successResponse = {
      "status": true,
    "message": "List Entry fetched successfully",
    "data": {
        "_id": "65f95aac601b07557bc717e8",
        "owner": {
            "_id": "653b8e816ecd501e8dcbae4a",
            "name": "Vidya",
            "avatar": "https://media.zixflow.com/652e5068c33fe13b6ba00fd7/profile-picture/652e5068c33fe13b6ba00fd7_2f2f8a45ca177efd5a2166b1e7882173.jpg",
            "email": "vidya@salessimplify.com"
        },
        "createdAt": "2024-03-19T09:28:12.303Z",
        "apiPhoneNumber": "8790492005",
        "apiEmail": "",
        "apiStatus1": null,
        "apiDate1": false
    }
    };
  
    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);
  
    const result = await listEntries.getListEntryById(listId, entryId);
  
    expect(mockedValidateParameters).toHaveBeenCalledWith(
      { listId, entryId }, 
      ['listId', 'entryId']
    );
  
    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith(
      {
        apiKey,
        method: 'get',
        apiUrl: api_url_get
      }
    );
  
    expect(result).toEqual(
      expect.objectContaining({
                "status": true,
                "message": "List Entry fetched successfully",
                "data": {
                    "_id": "65f95aac601b07557bc717e8",
                    "owner": {
                        "_id": "653b8e816ecd501e8dcbae4a",
                        "name": "Vidya",
                        "avatar": "https://media.zixflow.com/652e5068c33fe13b6ba00fd7/profile-picture/652e5068c33fe13b6ba00fd7_2f2f8a45ca177efd5a2166b1e7882173.jpg",
                        "email": "vidya@salessimplify.com"
                    },
                    "createdAt": "2024-03-19T09:28:12.303Z",
                    "apiPhoneNumber": "8790492005",
                    "apiEmail": "",
                    "apiStatus1": null,
                    "apiDate1": false
              }
      })
    );
  });
});
