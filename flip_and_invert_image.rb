# @param {Integer[][]} a
# @return {Integer[][]}
def flip_and_invert_image(a)
    a.each do |row|
      row.reverse!
    row.each_with_index do |img_section, idx|
      if img_section == 0
        row[idx] = 1
      else
        row[idx] = 0
      end
    end
  end
  a
end
