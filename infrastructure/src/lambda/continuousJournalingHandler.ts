import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: DEFAULT_HEADERS,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}
