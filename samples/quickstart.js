// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(
  project = 'projects/my-project/locations/-', // Get the functions for a project.
  page_size = 1, //Max number of functions to return per call
  page_token = 'token'
) {
  // [START cloud_nodejs_functions_quickstart]
  // Imports the Google Cloud client library

  // remove this line after package is released
  // eslint-disable-next-line node/no-missing-require
  const {CloudFunctionsServiceClient} = require('@google-cloud/functions');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  const client = new CloudFunctionsServiceClient();

  // project = 'my-project/*/locations/*' // Get the functions for a project.
  async function listFunctions() {
    const [functions] = await client.listFunctions({
      parent: project,
      pageSize: page_size,
      pageToken: page_token,
    });
    console.info(functions);
  }
  listFunctions();
  // [END cloud_nodejs_functions_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
