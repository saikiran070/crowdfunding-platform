// routes/contribution.js
const express = require('express');
const Contribution = require('/models/Contribution');
const Project = require('/models/Project');
const router = express.Router();
const stripe = require('stripe')('your_stripe_secret_key');

// Make a contribution
router.post('/', async (req, res) => {
  const { user_id, project_id, amount, token } = req.body;

  // Payment processing with Stripe
  await stripe.charges.create({
    amount: amount * 100,
    currency: 'usd',
    source: token,
    description: 'Contribution'
  });

  const contribution = new Contribution({ user_id, project_id, amount });
  await contribution.save();

  // Update the project's current_amount
  const project = await Project.findById(project_id);
  project.current_amount += amount;
  await project.save();

  res.status(201).send(contribution);
});

module.exports = router;
