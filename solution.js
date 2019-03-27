const data = require(process.argv[2]);

console.log(data);

const references = {};

const findReference = node => {
  /*
  console.log('----')
  console.log(node)
  console.log('----')
  */
  if (node.id !== undefined) {
    console.log('has ID');
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
      console.log('accessing reference ' + node.value);
      return references[node.value];
  }
};

findReference(data);

console.log(references);
console.log(evaluate(data));
