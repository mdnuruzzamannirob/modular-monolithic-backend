import { TGenericErrorResponse, TErrorSources } from '../interfaces/error.interface';

const duplicateErrorHandler = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  return {
    status: 400,
    message: 'Invalid ID',
    errorSources,
  };
};

export default duplicateErrorHandler;
