// P(A|B) = P(B|A) * P(A) / P(B|not A)
module.exports = (p_b_given_a, p_a, p_b_given_not_a) => {
  // P(not A)
  const not_a = 1 - p_a;
  // P(B)
  p_b = p_b_given_a * p_a + p_b_given_not_a * not_a;
  // P(A|B)
  return (p_b_given_a * p_a) / p_b;
};
