const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const initialiseTripartie = (apiKey) => {
  const defaultClient = TripartieWebApi.ApiClient.instance;
  const { ClientIdAuth } = defaultClient.authentications;
  ClientIdAuth.apiKey = apiKey;
};

export const createTemplate = async (
  sellerId,
  sellerEmail,
  title,
  description,
  price,
  currency,
  listingId,
  pictureFile,
  listingUrl
) => {
  const usersApi = new TripartieWebApi.UsersApi();
  let user;
  try {
    user = await usersApi.fetch({
      externalId: sellerId,
    });
  } catch (e) {
    console.log("user error", e);
  }

  if (!user) {
    await usersApi.register({
      email: sellerEmail,
      externalId: sellerId,
    });
  }

  // let pictureBase64;
  // try {
  //   pictureBase64 = await getBase64(pictureFile);
  // } catch (e) {
  //   pictureBase64 = "";
  // }

  const transactionTemplatesApi = new TripartieWebApi.TransactionTemplatesApi();
  const template = {
    title,
    description,
    subTotal: price * 100,
    externalId: listingId,
    sellerExternalId: sellerId,
    currency,
    flow: "objects",
    shippingProviders: "swiss-post",
    productCategory: "other",
    allowPriceChange: false,
    adUrl: listingUrl,
  };
  await transactionTemplatesApi.create(template);
};
