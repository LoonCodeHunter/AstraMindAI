def accuracy(y_true, y_pred):
  return sum(t == p for t, p in zip(y_true, y_pred)) / len(y_true)
