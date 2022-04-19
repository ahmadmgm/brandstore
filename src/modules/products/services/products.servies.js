import { Api } from "../../../utilities/api";

export default {
  async getAllProducts() {
    return await Api().get(`products.json`);
  },
};
