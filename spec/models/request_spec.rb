require 'spec_helper'

describe Request do
  it { should belong_to :user }
  it { should validate_presence_of :user_id }
  it { should validate_uniqueness_of :user_id }
end
