<script>
  import { onMount } from "svelte";
  import { initialiseTripartie, createTemplate } from "./tripartie.js";

  let cache = {};

  let apiKey = cache.apiKey || "";
  let title = cache.title || "";
  let description = cache.description || "";
  let currency = cache.currency || "EUR";
  let price = cache.price || "";
  let listingId = cache.listingId || "";
  let sellerId = cache.sellerId || "";
  let sellerEmail = cache.sellerEmail || "";
  let pictureFiles = [];
  let listingUrl = cache.listingUrl || "";
  let buttonDisabled = false;
  let message = { error: false, text: "" };
  let loading = false;

  onMount(() => {
    const storedCache = localStorage.getItem("cache");
    if (storedCache) {
      try {
        cache = JSON.parse(storedCache);
        apiKey = cache.apiKey;
        title = cache.title;
        description = cache.description;
        currency = cache.currency;
        price = cache.price;
        listingId = cache.listingId;
        sellerId = cache.sellerId;
        sellerEmail = cache.sellerEmail;
        listingUrl = cache.listingUrl;
      } catch (e) {
        cache = {};
      }
    }
  });

  const showMessage = (text, error = false) => {
    message = { error, text };
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    showMessage("");
    try {
      loading = true;
      console.log(cache);
      localStorage.setItem("cache", JSON.stringify(cache));
      await createTemplate(
        sellerId,
        sellerEmail,
        title,
        description,
        price,
        currency,
        listingId,
        pictureFiles[0],
        listingUrl
      );
      showMessage("Template created. Check admin dashboard to find it.");
    } catch (e) {
      console.log(e);
      showMessage(e.error.message || e.message || e.response.text, true);
    } finally {
      loading = false;
    }
  };

  const cleanCache = () => {
    localStorage.removeItem("cache");
  };

  $: buttonDisabled =
    !apiKey ||
    !title ||
    !description ||
    !price ||
    !currency ||
    !listingId ||
    !sellerId ||
    !sellerEmail ||
    !listingUrl;

  $: initialiseTripartie(apiKey);

  $: cache = {
    apiKey,
    sellerId,
    sellerEmail,
    title,
    description,
    price,
    currency,
    listingId,
    listingUrl,
  };
</script>

<main>
  {#if message.text}
    <div class="message" class:error={message.error}>
      {message.text}
    </div>
  {/if}
  <h3>Input data below</h3>
  <form on:submit={formSubmit}>
    <div class="input">
      <label for="api-key">API Key</label>
      <input
        type="text"
        name="api-key"
        id="api-key"
        placeholder="API Key"
        bind:value={apiKey}
      />
    </div>
    <div class="input">
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        bind:value={title}
      />
    </div>
    <div class="input">
      <label for="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        bind:value={description}
      />
    </div>
    <div class="input">
      <label for="currency">Currency</label>
      <select name="currency" bind:value={currency}>
        <option value="EUR">Euro</option>
        <option value="CHF">Swiss Franc</option>
      </select>
    </div>
    <div class="input">
      <label for="price">Price in {currency}</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        bind:value={price}
      />
    </div>
    <div class="input">
      <label for="template-id">Template ID</label>
      <input
        type="text"
        name="template-id"
        id="template-id"
        placeholder="Template ID"
        bind:value={listingId}
      />
    </div>
    <div class="input">
      <label for="seller-id">Seller ID</label>
      <input
        type="number"
        name="seller-id"
        id="seller-id"
        placeholder="Seller ID"
        bind:value={sellerId}
      />
    </div>
    <div class="input">
      <label for="seller-email">Seller E-mail</label>
      <input
        type="email"
        name="seller-email"
        id="seller-email"
        placeholder="Seller E-mail"
        bind:value={sellerEmail}
      />
    </div>
    <!-- <div class="input">
      <label for="picture-url">Picture</label>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        name="picture-url"
        id="picture-url"
        placeholder="Picture URL"
        bind:files={pictureFiles}
      />
    </div> -->
    <div class="input">
      <label for="listing-url">Listing URL</label>
      <input
        type="url"
        name="listing-url"
        id="listing-url"
        placeholder="Listing URL"
        bind:value={listingUrl}
      />
    </div>
    {#if loading}
      <h4>Loading...</h4>
    {:else}
      <button disabled={buttonDisabled} type="submit">Create</button>
    {/if}
  </form>
  <button on:click={cleanCache}>Clean Cache</button>
</main>

<style>
  main {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
  }

  form {
    display: block;
    min-width: 700px;
  }

  .input {
    padding: 8px 0;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input label {
    display: inline-block;
    flex: 0 0 150px;
  }

  .input input,
  .input textarea,
  .input select {
    font-size: 16px;
    padding: 4px;
    flex: 1 1 100%;
    margin: 0;
  }

  button[type="submit"] {
    margin-top: 32px;
    width: 100%;
  }

  .message {
    border: 1px solid #1565c0;
    background-color: #1565c0;
    width: 100%;
    padding: 12px 48px;
    width: 700px;
    color: white;
  }

  .message.error {
    border-color: #c62828;
    background-color: #c62828;
  }
</style>
