require 'sinatra'
require 'json'
require 'rest-client'
require 'sinatra/cross_origin'

set :port, 4000
set :bind, '0.0.0.0'
set :protection, :except => [:json_csrf]

configure do
  enable :cross_origin
end

get '/data' do
  content_type :json
  result(profile_id).to_json
end

get '/data/:profile_id' do |passed_profile_id|
  content_type :json
  result(passed_profile_id).to_json
end

def profile_id
  url = "https://peaceful-springs-7920.herokuapp.com/profile/"
  resp = RestClient.get(url)
  JSON.parse(resp)["profileId"]
end

def result(id)
  url = "https://peaceful-springs-7920.herokuapp.com/content/#{id}"
  result = RestClient.get(url)
  JSON.parse(result)
end
