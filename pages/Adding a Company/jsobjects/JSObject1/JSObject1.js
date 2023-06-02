export default {
	async function() {
    const mappedData = Get_Location.data;
    const transformed_data = mappedData.map(item => {
      return {
        "value": item["city"],
        "label": item["state"]
      };
    });
		return transformed_data
  }
}

