#!/bin/bash

px_to_rem() {
    local px="$1"
    local base_font_size="16"
    local rem=$(bc <<< "scale=6; $px / $base_font_size")
    echo "$rem"
}

if [ "$#" -ne 1 ]; then
    echo "Użycie: $0 <px>"
    exit 1
fi

px_value="$1"
base_font_size="16"

result=$(px_to_rem "$px_value" "$base_font_size")
echo "${px_value}px = ${result}rem"
