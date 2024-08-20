# Use an official Docker image as the base
FROM docker:24.0.5

# Install dependencies
RUN apk add --no-cache \
    curl \
    python3 \
    py3-pip \
    bash \
    && pip3 install --upgrade pip \
    && apk add --no-cache gettext bash curl

# Install AWS CLI
RUN pip3 install awscli --no-cache-dir

# Install kubectl
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" \
    && chmod +x kubectl \
    && mv kubectl /usr/local/bin/

# Verify installations
RUN docker --version \
    && aws --version \
    && kubectl version --client

# Set bash as the default shell
CMD ["bash"]

