json.extract! job, :id, :company, :location, :title, :description, :url, :created_at, :updated_at
json.url job_url(job, format: :json)