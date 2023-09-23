const mailchimp = require('@mailchimp/mailchimp_transactional')('Y');

async function callPing() {
  const response = await mailchimp.users.ping();
  console.log(response);
}

callPing();