def to_url string
  return root_path if string == "the homepage"
  raise "I don't know url '#{string}'"
end

def to_element string
  return ".slide-1" if string == "the first slide"
  return ".slide-2" if string == "the second slide"
  return ".slide-3" if string == "the third slide"
  return ".slide-4" if string == "the fourth slide"
  return ".slide-5" if string == "the fifth slide"
  return ".slide-6" if string == "the sixth slide"
  return ".slide-7" if string == "the seventh slide"
  raise "I don't know element '#{string}'"
end
