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

describe('CollectionRecords - getListOfCollectionRecords', () => {
  let collectionRecords: CollectionRecords;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const collectionId = 'people';
  const api_url = `${domain}/api/v1/collection-records/${collectionId}/query`;

  beforeEach(() => {
    collectionRecords = new CollectionRecords(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return collection records', async () => {
    const successResponse = {
      status: true,
      message: 'Records fetched successfully',
      data: [
        {
          _id: '6531e58c334bee4ef37eb4eb',
          name: 'Sahil Khaire',
          firstName: 'Sahil',
          lastName: 'Khaire',
          emails: ['sahil@zixflow.com'],
          phoneNumbers: ['919619522338'],
          emailValidation: {
            _id: '652e506bf781c59be3825549',
            name: 'Deliverable',
          },
          source: {
            _id: '652e506bf781c59be38256a7',
            name: 'Manually created',
          },
          share: [
            {
              _id: '653b8d276ecd501e8dcba7e2',
              name: 'Sajin',
              email: 'sajin@zixflow.com',
            },
          ],
        },
      ],
    };

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await collectionRecords.getListOfCollectionRecords(collectionId);

    expect(mockedValidateParameters).toHaveBeenCalledWith({ collectionId }, ['collectionId']);
    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith({
      apiKey,
      apiUrl: api_url,
      method: 'post',
    });
    expect(result).toEqual(
      expect.objectContaining({
        status: true,
        message: 'Records fetched successfully',
        data: expect.arrayContaining([
          expect.objectContaining({
            _id: '6531e58c334bee4ef37eb4eb',
            name: 'Sahil Khaire',
            firstName: 'Sahil',
            lastName: 'Khaire',
            emails: expect.arrayContaining(['sahil@zixflow.com']),
            phoneNumbers: expect.arrayContaining(['919619522338']),
            emailValidation: expect.objectContaining({
              _id: '652e506bf781c59be3825549',
              name: 'Deliverable',
            }),
            source: expect.objectContaining({
              _id: '652e506bf781c59be38256a7',
              name: 'Manually created',
            }),
            share: expect.arrayContaining([
              expect.objectContaining({
                _id: '653b8d276ecd501e8dcba7e2',
                name: 'Sajin',
                email: 'sajin@zixflow.com',
              }),
            ]),
          }),
        ]),
      })
    );
  });
});
