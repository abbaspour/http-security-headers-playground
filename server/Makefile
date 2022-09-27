PLAN_FILE=cf.plan

main: plan

plan:
	terraform plan -out $(PLAN_FILE)

apply:
	terraform apply $(PLAN_FILE)

show:
	terraform show

init:
	terraform init -upgrade

clean:
	rm $(PLAN_FILE)

graph:
	terraform graph | dot -Tsvg > graph.svg

.PHONY: clean plan
