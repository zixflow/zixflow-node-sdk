import CollectionRecords from '../services/collectionRecords/collectionRecords';
import axiosWrapper from '../utilities/axiosRequestWrapper';
import createAxiosConfig from '../utilities/axiosConfig';
import { validateParameters } from '../utilities/validateParameters';

jest.mock('../utilities/axiosRequestWrapper.ts');
jest.mock('../utilities/axiosConfig');
jest.mock('../utilities/validateParameters');

const mockedAxiosWrapper = axiosWrapper as jest.MockedFunction<typeof axiosWrapper>;
const mockedCreateAxiosConfig = createAxiosConfig as jest.MockedFunction<typeof createAxiosConfig>;
const mockedValidateParameters = validateParameters as jest.MockedFunction<typeof validateParameters>;

describe('CollectionRecords - deleteCollectionRecord', () => {
  let collectionRecords: CollectionRecords;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const collectionId = 'people';
  const recordId = '6531e58c334bee4ef37eb4eb';
  const api_url_delete = `${domain}/api/v1/collection-records/${collectionId}/${recordId}`;

  beforeEach(() => {
    collectionRecords = new CollectionRecords(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete a record from the specified collection", async () => {
    const successResponse = {
      status: true,
      message: "Record deleted successfully!",
    };

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await collectionRecords.deleteCollectionRecordById(collectionId, recordId);

    expect(mockedValidateParameters).toHaveBeenCalledWith({ collectionId, recordId }, ['collectionId', 'recordId']);
    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith({
      apiKey,
      method: 'delete',
      apiUrl: api_url_delete,
    });

    expect(result).toEqual(
      expect.objectContaining({
        status: true,
        message: 'Record deleted successfully!',
      })
    );
  });
});
