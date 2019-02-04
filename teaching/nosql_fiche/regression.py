import json
import numpy

beta = 2.3
X = numpy.random.randn(50, )
Y = beta * X + 0.1 * numpy.random.randn(50, )

docs = []
for xi, yi in zip(X, Y):
    docs.append({"x": xi, "y": yi})

json.dump(docs, open("reg.json", "w"))
