const data = require(process.argv[2]);

const references = {};

const findReference = node => {
  if (node.id !== undefined) {
    references[node.id] = evaluate(node);
  }
  if (node.value) {
    findReference(node.value);
  }
  if (node.left) findReference(node.left);
  if (node.right) findReference(node.right);
};

const evaluate = node => {
  switch (node.op) {
    case 'number':
    case 'string':
      return node.value;
    case 'add':
      return evaluate(node.left) + evaluate(node.right);
    case 'char':
      return String.fromCharCode(evaluate(node.value));
    case 'ref':
      return references[node.value];
  }
};

findReference(data);

while (Object.values(references).includes(NaN)) {
  findReference(data);
}

console.log(evaluate(data));
