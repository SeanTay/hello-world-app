Job.destroy_all
job = JSON.parse(File.read("db/job.data.json"))
Job.create!(job)
