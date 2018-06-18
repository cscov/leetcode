input = [1, 4, 2, 5, 3]

def bubble_sort(arr)
  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      if arr[i] > arr[j]
        arr[i], arr[j] = arr[j], arr[i]
      end
      j += 1
    end
    i += 1
  end
  arr
end

p bubble_sort(input)
