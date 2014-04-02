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
  return ".first_name_field.error" if string == "the first name field with error"
  return ".last_name_field.error" if string == "the last name field with error"
  return ".email_field.error" if string == "the email field with error"
  raise "I don't know element '#{string}'"
end

def to_field string
  return "first_name" if string == "the first name field"
  return "last_name" if string == "the last name field"
  return "email" if string == "the email field"
  raise "I don't know '#{string}'"
end

def to_button string
  return "request-submit-button" if string == "the request form submit button"
  raise "I don't know '#{string}'"
end

def to_link string
  return "request-membership-card-button" if string == "the request membership card button"
  raise "I don't know '#{string}'"
end

def to_subject string
  return "Meu Rio - Vamos Festejar!" if string == "we received your request"
  return "Carteirinha solicitada" if string == "membership card requested"
end