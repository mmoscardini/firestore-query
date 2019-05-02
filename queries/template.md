# Collection
collectionName

# Conditions
field, operator, value

The conditions must be separeted by coma(','), and each conditions listed on a new line.
Firebase only suports *AND* operations, so each clause is aggregated with an *AND*

# Description
Fields is the name of the field to query for

Operator must be a valid firebase operator ['==', '>', '<' '>=', '<=']

Value must be the value to query, with a valid type
Examples:
String: São Paulo
Number 123
Date: 2019-01-01 or 2019-01-01T15:00:00Z
Boolean: true, false, TRUE, FALSE, True, False ...
Null: null