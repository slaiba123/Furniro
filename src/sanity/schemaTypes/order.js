export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Product Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.min(1),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.min(0),
            },
            {
              name: "image",
              title: "Image",
              type: "string",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    },
    {
      name: "deliveryDate",
      title: "Estimated Delivery Date",
      type: "datetime",
      description: "Auto-generated within the next 7 days (weekdays only)",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
};

// schemas/order.js
// export default {
//   name: 'order',
//   type: 'document',
//   fields: [
//     { name: 'userId', type: 'string' },
//     { name: 'products', type: 'array', of: [
//       {
//         type: 'object',
//         fields: [
//           { name: 'name', type: 'string' },
//           { name: 'price', type: 'number' },
//           { name: 'quantity', type: 'number' },
//           { name: 'image', type: 'string' }, // or 'image' if you use Sanity images
//         ]
//       }
//     ]},
//     { name: 'totalPrice', type: 'number' },
//     { name: 'deliveryDate', type: 'datetime' },
//     { name: 'createdAt', type: 'datetime' },
//   ]
// }
