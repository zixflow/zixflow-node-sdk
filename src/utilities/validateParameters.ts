export function validateParameters(params: { [key: string]: any }, requiredParams: string[]): void {
    const missingParams: string[] = [];
  
    requiredParams.forEach(param => {
      if (!params[param]) {
        missingParams.push(param);
      }
    });
  
    if (missingParams.length > 0) {
      throw new Error(`Missing required parameter(s): ${missingParams.join(', ')}`);
    }

  }