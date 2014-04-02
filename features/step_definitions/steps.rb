Then(/^an email called "(.*?)" should be sent$/) do |arg1|
  subject = to_subject(arg1)
  expect(ActionMailer::Base.deliveries.select{|d| d.subject == subject}.size).to be_eql 1
end

Then(/^an email should be sent$/) do
  expect(ActionMailer::Base.deliveries.size).to be_eql 1
end
