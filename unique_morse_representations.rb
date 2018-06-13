# @param {String[]} words
# @return {Integer}
def unique_morse_representations(words)
    morse_alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  alphabet_mapping = {}
  alphabet = ("a".."z").to_a

  alphabet.each_with_index do |letter, idx|
    alphabet_mapping[letter] = morse_alphabet[idx]
  end

  transformations = []

  words.each do |word|
    morse_word = ""
    word.each_char do |ch|
      morse_word += alphabet_mapping[ch]
    end
    transformations << morse_word
  end
  transformations.uniq!

  transformations.length

end
