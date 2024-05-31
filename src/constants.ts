export const POST_SMS_API_URL = `/api/v1/campaign/sms/send`;

export const POST_EMAIL_API_URL = `/api/v1/campaign/email/send`;

export const POST_WHATSAPP_API_URL = `/api/v1/campaign/whatsapp/send`;

export const GET_LIST_OF_COLLECTION_RECORDS = `/api/v1/collection-records/{collectionId}/query`;

export const GET_COLLECTION_RECORD_BY_ID = `/api/v1/collection-records/{collectionId}/{recordId}`; 

export const CREATE_COLLECTION_RECORD = `/api/v1/collection-records/{collectionId}`;

export const UPDATE_COLLECTION_RECORD = `/api/v1/collection-records/{collectionId}/{recordId}`;

export const DELETE_COLLECTION_RECORD_BY_ID = `/api/v1/collection-records/{collectionId}/{recordId}`



export const GET_LIST_OF_LIST_ENTRIES = `/api/v1/list-entries/{listId}/query`;

export const GET_LIST_ENTRY_BY_ID = `/api/v1/list-entries/{listId}/{entryId}`; 

export const CREATE_LIST_ENTRY = `/api/v1/list-entries/{listId}`;

export const UPDATE_LIST_ENTRY = `/api/v1/list-entries/{listId}/{entryId}`;

export const DELETE_LIST_ENTRY_BY_ID = `/api/v1/list-entries/{listId}/{entryId}`