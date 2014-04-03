Then(/^an email should be sent$/) do
  expect(ActionMailer::Base.deliveries.size).to be_eql 1
end

Then(/^(\d+) emails should be sent$/) do |arg1|
  expect(ActionMailer::Base.deliveries.size).to be_eql arg1.to_i
end
