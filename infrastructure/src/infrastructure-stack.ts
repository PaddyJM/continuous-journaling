import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { config } from "dotenv";
import path from "path";

const env = process.env.ENV ?? "dev";
config({
  path: path.resolve(__dirname, `../../.env${env === "dev" ? "" : `.${env}`}`),
});

const appName = 'ContinuousJournaling';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new cdk.aws_lambda_nodejs.NodejsFunction(this, `${appName}-Function-${env}`, {
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      entry: path.join(__dirname, `./lambda/${appName}Handler.ts`),
      timeout: cdk.Duration.seconds(7),
    });

    const api = new cdk.aws_apigateway.LambdaRestApi(this, `${appName}-Api-${env}`, {
      handler: lambda,
      proxy: false,
      defaultCorsPreflightOptions: {
        allowOrigins: cdk.aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: cdk.aws_apigateway.Cors.ALL_METHODS,
      },
    });

    const journal = api.root.addResource("journal");
    journal.addMethod("POST");
  }
}
