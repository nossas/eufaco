Given(/^I fill in "(.*?)" with "(.*?)"$/) do |arg1, arg2|
  fill_in to_field(arg1), with: arg2
end

When(/^I press "(.*?)"$/) do |arg1|
  click_button to_button(arg1)
end

When /^I click "([^"]*)"$/ do |arg1|
  click_link to_link(arg1)
end

Then(/^I should be in "(.*?)"$/) do |arg1|
  expect(current_path).to be_eql to_url(arg1)
end

Then(/^an email called "(.*?)" should be sent$/) do |arg1|
  subject = to_subject(arg1)
  expect(ActionMailer::Base.deliveries.select{|d| d.subject == subject}.size).to be_eql 1
end
