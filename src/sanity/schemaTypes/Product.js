export default  {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Product Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Product Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        validation: (Rule) => Rule.min(0),
      },
   
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "isFeatured",
        title: "Featured Product",
        type: "boolean",
      },
    ],
  };
  