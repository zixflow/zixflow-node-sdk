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

describe('CollectionRecords - getCollectionRecordById', () => {
  let collectionRecords: CollectionRecords;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const collectionId = 'people';
  const recordId = '66691f1e0bcfdb9e1719bdaa';
  const api_url_get = `${domain}/api/v1/collection-records/${collectionId}/${recordId}`;

  beforeEach(() => {
    collectionRecords = new CollectionRecords(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get the record from specified collection", async () => {
    const successResponse = {
      status: true,
      message: "Record fetched successfully",
      data: {
        _id: "66691f1e0bcfdb9e1719bdaa",
        name: "John Doe Apoorva",
        firstName: "John",
        lastName: "Doe Apoorva",
        emails: ["john.doe@example.com", "j.doe@workplace.com"],
        phoneNumbers: ["1234567890", "0987654321"],
        company: null,
        jobTitle: "",
        description: "A dedicated software engineer with 5 years of experience in web development.",
        address: "",
        emailValidation: {
          _id: "652e506bf781c59be3825549",
          name: "Deliverable",
          color: "#dbeddb",
          isArchived: false,
          order: 1
        },
        facebook: "https://www.facebook.com/johndoe",
        instagram: "https://www.instagram.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        twitter: "https://www.twitter.com/johndoe",
        lastInteraction: "2024-06-10T14:30:00.000Z",
        timezone: null,
        optOut: [],
        optOutReason: [],
        source: {
          _id: "652e506bf781c59be38256a7",
          name: "Manually created",
          color: "#dbeddb",
          isArchived: false,
          order: 1
        },
        owner: {
          _id: "652e5068c33fe10d7ea00fdc",
          name: "Sahil Khaire",
          avatar: "https://media.zixflow.com/652e5068c33fe13b6ba00fd7/profile-picture/652e5068c33fe13b6ba00fd7_me2.png",
          email: "sahil@zixflow.com"
        },
        share: [],
        createdAt: "2024-06-12T04:07:58.592Z",
        apiStatus: null,
        apiSelect: null,
        apiCheckboxField: false,
        apiCurrency: 0,
        apiDate: false,
        apiTimestamp: false,
        apiRating: 0,
        apiMultiselect: [],
        apiAiWizard: "",
        apiName: "",
        apiNumber: 0
      }
    };
  
    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);
  
    const result = await collectionRecords.getCollectionRecordById(collectionId, recordId);
  
    expect(mockedValidateParameters).toHaveBeenCalledWith(
      { collectionId, recordId }, 
      ['collectionId', 'recordId']
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
        status: true,
        message: 'Record fetched successfully',
        data: expect.objectContaining({
          _id: '66691f1e0bcfdb9e1719bdaa',
          name: 'John Doe Apoorva',
          firstName: 'John',
          lastName: 'Doe Apoorva',
          emails: expect.arrayContaining(['john.doe@example.com', 'j.doe@workplace.com']),
          phoneNumbers: expect.arrayContaining(['1234567890', '0987654321']),
          company: null,
          jobTitle: '',
          description: 'A dedicated software engineer with 5 years of experience in web development.',
          address: '',
          emailValidation: expect.objectContaining({
            _id: '652e506bf781c59be3825549',
            name: 'Deliverable',
            color: '#dbeddb',
            isArchived: false,
            order: 1
          }),
          facebook: 'https://www.facebook.com/johndoe',
          instagram: 'https://www.instagram.com/johndoe',
          linkedin: 'https://www.linkedin.com/in/johndoe',
          twitter: 'https://www.twitter.com/johndoe',
          lastInteraction: '2024-06-10T14:30:00.000Z',
          timezone: null,
          optOut: [],
          optOutReason: [],
          source: expect.objectContaining({
            _id: '652e506bf781c59be38256a7',
            name: 'Manually created',
            color: '#dbeddb',
            isArchived: false,
            order: 1
          }),
          owner: expect.objectContaining({
            _id: '652e5068c33fe10d7ea00fdc',
            name: 'Sahil Khaire',
            avatar: 'https://media.zixflow.com/652e5068c33fe13b6ba00fd7/profile-picture/652e5068c33fe13b6ba00fd7_me2.png',
            email: 'sahil@zixflow.com'
          }),
          share: [],
          createdAt: '2024-06-12T04:07:58.592Z',
          apiStatus: null,
          apiSelect: null,
          apiCheckboxField: false,
          apiCurrency: 0,
          apiDate: false,
          apiTimestamp: false,
          apiRating: 0,
          apiMultiselect: [],
          apiAiWizard: '',
          apiName: '',
          apiNumber: 0
        })
      })
    );
  });
});
