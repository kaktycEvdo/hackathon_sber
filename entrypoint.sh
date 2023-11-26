ADD entrypoint.sh /hermes-app/entrypoint.sh
RUN chmod +x /hermes-app/entrypoint.sh
ENTRYPOINT [ "/hermes-app/entrypoint.sh" ]