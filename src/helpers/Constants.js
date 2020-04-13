export const Constants = {
 stsAuthority : 'https://stagingsal.cxrus.net/auth/realms/SAL/',
 clientId : 'testreactapp',

//domain name is not whitelisted
//use ip address for now
 clientRoot : window.location.origin+ "/",
 clientScope : 'openid',

//gateway -> change to lawnet api to test whether the cors bypass works
 apiRoot : 'https://api.sal.sg/httpbin/'
};