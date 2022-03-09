module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6c3f6a22b294bfaf7003e647153d920'),
  },
});
