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

describe('CollectionRecords - updateCollectionRecord', () => {
  let collectionRecords: CollectionRecords;
  const apiKey = 'your-api-key';
  const domain = 'https://api.zixflow.com';
  const collectionId = 'people';
  const recordId = '66691f1e0bcfdb9e1719bdaa';
  const api_url_update = `${domain}/api/v1/collection-records/${collectionId}/${recordId}`;

  beforeEach(() => {
    collectionRecords = new CollectionRecords(apiKey, domain);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update fields of a record in specified collection", async () => {
    const updatingRecord = {
      name: "John Doe Apoorva Updating",
      emails: ["john.doe@example.com", "j.doe@workplace.com"],
      phoneNumbers: ["+1234567890", "+0987654321"],
      company: null,
      jobtitle: "Software Engineer",
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
      lastInteraction: "2024-06-10T14:30:00Z",
      timezone: null,
      optout: false,
      source: "652e506bf781c59be38256a7",
      owner: null,
      share: ["653b8d276ecd501e8dcba7e2"],
      status: "Active",
      select: "Option1",
      checkboxField: true,
      currency: "USD",
      date: "2024-06-12",
      timestamp: "2024-06-12T12:00:00Z",
      rating: 4.5,
      multiselect: ["Option1", "Option3"],
      aiWizard: "Enabled",
      number: 42
    };

    const successResponse = {
      status: true,
      message: "Record updated successfully!"
    };

    mockedAxiosWrapper.mockResolvedValueOnce(successResponse);

    const result = await collectionRecords.updateCollectionRecord(collectionId, recordId, updatingRecord);

    expect(mockedValidateParameters).toHaveBeenCalledWith(
      { collectionId, recordId, recordData: updatingRecord },
      ['collectionId', 'recordId', 'recordData']
    );

    expect(mockedCreateAxiosConfig).toHaveBeenCalledWith(
      {
        apiKey,
        method: 'patch',
        apiUrl: api_url_update,
        data: updatingRecord
      }
    );

    expect(result).toEqual(
      expect.objectContaining({
        status: true,
        message: 'Record updated successfully!'
      })
    );
  });
});
