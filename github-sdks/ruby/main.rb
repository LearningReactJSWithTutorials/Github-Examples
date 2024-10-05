require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

client.create_ref("aprendizsw/Github-Examples2", "refs/heads/sdks", "073767ba5ac2f88abbf00afc3cd0463492369e10")