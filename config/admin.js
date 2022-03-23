module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '588ec573e5d9bbd02b3e824a1c001b0c'),
  },
});
