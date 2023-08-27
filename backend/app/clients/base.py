import os
import json
from google.cloud import secretmanager
from dotenv import load_dotenv

load_dotenv()


class BaseClient:
    def __init__(self) -> None:
        self.cloud_secret_client = secretmanager.SecretManagerServiceClient()
        # TODO(daniel): fix envand load os.getenv("GCLOUD_PROJECT_ID")
        self.project_id = "warm-393022"
        assert (
            self.project_id is not None
        ), "GCLOUD_PROJECT_ID environment variable not set"

    def get_secret(self, secret_name: str, key: str = "api_key") -> str:
        secret_path = (
            f"projects/{self.project_id}/secrets/{secret_name}/versions/latest"
        )
        secret = self.cloud_secret_client.access_secret_version(
            request={"name": secret_path}
        )
        return json.loads(secret.payload.data.decode("UTF-8"))[key]
        # return "None"
