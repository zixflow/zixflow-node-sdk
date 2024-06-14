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

describe('List Entries - deleteListEntry', () => {
  let listEntries: ListEntries;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const listId = '66581884c254f3f08404a1d1';
  const entryId = '666a705d0bcfdb9e17296fe7';
  const api_url_delete = `${domain}/api/v1/list-entries/${listId}/${entryId}`;

  beforeEach(() => {
    listEntries = new ListEntries(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete a entry from the specified list", async () => {
    const successResponse = {
        "status": true,
        "message": "List Entry deleted successfully"
    }

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await listEntries.deleleListEntryById(listId, entryId);

    expect(mockedValidateParameters).toHaveBeenCalledWith({ listId, entryId }, ['listId', 'entryId']);
    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith({
      apiKey,
      method: 'delete',
      apiUrl: api_url_delete,
    });

    expect(result).toEqual(
      expect.objectContaining({
       "status": true,
        "message": "List Entry deleted successfully"
      })
    );
  });
});
