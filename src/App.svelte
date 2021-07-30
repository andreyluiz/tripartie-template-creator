<script>
  let apiKey = "";
  let title = "";
  let description = "";
  let price = "";
  let listingId = "";
  let sellerId = "";
  let imageUrl = "";
  let buttonDisabled = false;

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Gotcha!");
  };

  $: buttonDisabled =
    !apiKey ||
    !title ||
    !description ||
    !price ||
    !listingId ||
    !sellerId ||
    !imageUrl;
</script>

<main>
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
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        bind:value={description}
      />
    </div>
    <div class="input">
      <label for="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        bind:value={price}
      />
    </div>
    <div class="input">
      <label for="listing-id">Listing ID</label>
      <input
        type="number"
        name="listing-id"
        id="listing-id"
        placeholder="Listing ID"
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
      <label for="image-url">Image URL</label>
      <input
        type="url"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        bind:value={imageUrl}
      />
    </div>
    <button disabled={buttonDisabled} type="submit">Create</button>
  </form>
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
    flex: 0 0 100px;
  }

  .input input {
    font-size: 16px;
    padding: 4px;
    flex: 1 1 100%;
    margin: 0;
  }

  button {
    margin-top: 32px;
    width: 100%;
  }
</style>
