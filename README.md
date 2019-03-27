# Smartly.io excursion puzzle
## Node types

**Number**

Defines number (integer) constant. Number could be also negative

```
{
  "op": "number",
  "value": Number
}
```

**String**

Defines string constant

```
{
  "op: "string",
  "value": String
}
```

**Add**

Adds two different branches together. Trees must be same type (number+number and string+string is only allowed).

```
{
  "op": "add",
  "left": Node,
  "right": Node
}
```

**Char**

Converts number to corresponding ASCII character. This also converts tree type from number to string. For example, if branch under “value” key is evaluated as number 65, this node is evaluated as string “A” 

```
{
  "op": "char",
  "value": Node
}
```

**Ref** (no need to implement these for challenge.json)

Reference node that contains the defined id.

```
{
  "op": "ref",
  "value": Number 
}
```

The node above references any node (of any type) that contains id following way:

```
{
  "id": Number
  "op": 'add',
  "left": Node,
  "right": Node
}
```
