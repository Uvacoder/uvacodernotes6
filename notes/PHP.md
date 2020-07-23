# PHP

- `echo 'Hello World';`
- `$test = ['Pol', 'Marc', 'Joe'];`
- `echo count($test);`
- Prints information about a variable`print_r($test);`
- Dumps information about a variable: `var_dump($test);`
- To concatenate, we use `.` (not `+` like in JS)
- Or `""` will parse the variable, like: `"$string1 $string2"`
- If we know the value is not gonna change, we can define _Constants_ -> `define('GREETING', 'Hello friends');`

## Arrays

- Types

  1. Indexed = normal
  2. Associative = we can define key-value pairs

  - ```php
    $people = array('Pol' => 29, 'Elen' => 34);
    echo $people['Pol'];
    //prints 29
    ```

  3. Multidimensional = same like JS

## Loops

- For, While, Do..While, Foreach
- `foreach($array as $element){}`

## Conditional Logic

- `XOR` -> exclusive or. Like `||`, but only one has to be true (not both)

## Date

```php
echo date('d');
echo date('m');
echo date('Y');
echo date('l');
//We can combine them
echo date('l, d-m-Y')
```

- `strtotime` -> transforms a string to a timestamp
- date can take `(format, timestamp)`

## Includes

- `<?php include 'folder/file.php'; ?>`
- use `require` when we want everything to stop if the file is not found. Can also use `require_once`.

## Superglobal Variables

- Variables that are available in all scopes
- Always written like this: `$_SUPERGLOBAL`

## WordPress

- [Setting up local development](https://code.tutsplus.com/articles/how-to-set-up-a-wordpress-development-environment-for-windows--wp-23365)
