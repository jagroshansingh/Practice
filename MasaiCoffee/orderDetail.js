const od=()=>{
    return (`<form action="">
    <div>
      <label for="">Customer Name:</label>
      <input type="text" placeholder="Customer Name" id="customerName" />
    </div>
    <div>
      <label for="">Coffee Type:</label>
      <select name="coffeeType" id="coffeeType">
        <option value="">Select from the following</option>
        <option value="Americano">Americano</option>
        <option value="Expresso">Expresso</option>
        <option value="Cappuccino">Cappuccino</option>
      </select>
    </div>
    <div>
      <label for="">Size:</label>
      <select name="size" id="size">
        <option value="">Choose one size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
    <div>
      <label for="">Quantity:</label>
      <input type="number" id="quantity" />
    </div>
    <div>
      <h3>Total Price:</h3>
      <h3 id="total"></h3>
    </div>
    <button type="submit">Submit</button>
  </form>`)
}

export default od