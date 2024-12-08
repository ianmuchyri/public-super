import SDK, { Login, SDKConfig } from "@absmach/magistrala-sdk";

const sdkConf: SDKConfig = {
  domainsUrl: "http://localhost:9003",
  usersUrl: "http://localhost:9002",
};

const mgsdk = new SDK(sdkConf);

const getToken = async () => {
  try {
    const credentials: Login = {
      identity: "admin@example.com",
      secret: "12345678",
    };

    const token = await mgsdk.users.CreateToken(credentials);

    return token;
  } catch (error) {
    console.error("get token error: ", error);
    throw error;
  }
};

export const ListDomains = async () => {
  try {
    const token = await getToken();
    const domains = await mgsdk.domains.Domains(
      { offset: 0, limit: 10 },
      token.access_token
    );
    return domains;
  } catch (error) {
    console.error("list domains error: ", error);
    throw error;
  }
};
